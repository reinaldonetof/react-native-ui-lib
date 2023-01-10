import isNull from 'lodash/isNull';
import React, {useContext, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import Reanimated, {useSharedValue, useAnimatedStyle, useAnimatedReaction} from 'react-native-reanimated';
import TouchableOpacity from '../../components/touchableOpacity';
import Text from '../../components/text';
import {DayProps} from './types';
import {getDayOfDate, isSameDay} from './helpers/DateUtils';
import CalendarContext from './CalendarContext';


const AnimatedText = Reanimated.createAnimatedComponent(Text);

const Day = (props: DayProps) => {
  const {date, onPress} = props;
  const {selectedDate, setDate} = useContext(CalendarContext);

  const shouldMarkSelected = !isNull(date) ? isSameDay(selectedDate.value, date) : false;
  const isSelected = useSharedValue(shouldMarkSelected);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: isSelected.value ? 'blue' : 'white',
      color: isSelected.value ? 'white' : 'blue'
    };
  });

  useAnimatedReaction(() => {
    return selectedDate.value;
  }, (selected) => {
    isSelected.value = isSameDay(selected, date!);
  }, []);

  const _onPress = useCallback(() => {
    if (date !== null) {
      isSelected.value = true;
      setDate(date);
      onPress?.(date);
    }
  }, [date, setDate, onPress]);
  
  const renderDay = () => {
    const day = !isNull(date) ? getDayOfDate(date) : '';
    return <AnimatedText style={animatedStyles}>{day}</AnimatedText>;

  };

  return (
    <TouchableOpacity center style={styles.dayContainer} onPress={_onPress} activeOpacity={1}>
      {renderDay()}
    </TouchableOpacity>
  );
};

export default Day;

const styles = StyleSheet.create({
  dayContainer: {
    borderWidth: 1,
    width: 32,
    height: 32
  }
});
