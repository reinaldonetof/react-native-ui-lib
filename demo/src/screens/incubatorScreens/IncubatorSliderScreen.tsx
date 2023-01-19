import React, {useState, useRef} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Constants, Colors, View, Text, Button, Incubator} from 'react-native-ui-lib'; //eslint-disable-line
import {renderBooleanOption} from '../ExampleScreenPresenter';

const VALUE = 20;
const NEGATIVE_VALUE = -30;
const MIN = 0;
const MAX = 100;

const IncubatorSliderScreen = () => {
  const [disableRTL, setDisableRTL] = useState<boolean>(false);

  const [sliderValue, setSliderValue] = useState(0);
  const [stepSliderValue, setStepSliderValue] = useState(VALUE);
  const [negativeSliderValue, setNegativeSliderValue] = useState(NEGATIVE_VALUE);
  const [sliderMinValue, setSliderMinValue] = useState(MIN);
  const [sliderMaxValue, setSliderMaxValue] = useState(MAX);
  
  const slider = useRef<typeof Incubator.Slider>();
  const stepSlider = useRef<typeof Incubator.Slider>();
  const negativeSlider = useRef<typeof Incubator.Slider>();
  const rangeSlider = useRef<typeof Incubator.Slider>();

  const resetSliders = () => {
    slider.current?.reset();
    stepSlider.current?.reset();
    rangeSlider.current?.reset();
    negativeSlider.current?.reset();
  };

  const onValueChange = (value: number) => {
    // console.warn('onValueChange: ', value);
    setSliderValue(value);
  };

  const onStepValueChange = (value: number) => {
    // console.warn('onStepValueChange: ', value);
    setStepSliderValue(value);
  };

  const onNegativeValueChange = (value: number) => {
    // console.warn('onValueChange: ', value);
    setNegativeSliderValue(value);
  };

  const onRangeChange = (value: {min: number, max: number}) => {
    // console.warn('onRangeChange: ', min, max);
    setSliderMaxValue(value.max);
    setSliderMinValue(value.min);
  };

  const renderValuesBox = (min: number, max?: number) => {
    if (max !== undefined) {
      return (
        <View row spread marginB-20>
          <Text bodySmall $textNeutral>min. {min}</Text>
          <Text bodySmall $textNeutral>max. {max}</Text>
        </View>
      );
    } else {
      return (
        <View center marginB-20>
          <Text bodySmall $textNeutral>value: {min}</Text>
        </View>
      );
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View row spread margin-20>
        <Text h1>Slider</Text>
        <Button link label="Reset Sliders" onPress={resetSliders}/>
      </View>
      <View marginL-20>
        {Constants.isRTL && renderBooleanOption('Disable RTL', 'disableRTL', {spread: false, state: disableRTL, setState: setDisableRTL})}
      </View>

      <View>
        <Text margin-10 text70BL>Default Slider values 0 to 1</Text>
        {renderValuesBox(sliderValue)}
        <Incubator.Slider
          ref={slider}
          onValueChange={onValueChange}
          containerStyle={styles.container}
          disableRTL={disableRTL}
        />
      </View>

      <View marginT-40>
        <Text margin-10 text70BL>Disabled Slider</Text>
        <Incubator.Slider
          value={0.4}
          containerStyle={styles.container}
          disableRTL={disableRTL}
          disabled
        />
      </View>
      
      <View marginT-40>
        <Text margin-10 text70BL>Custom Slider</Text>
        {renderValuesBox(stepSliderValue)}
        <Incubator.Slider
          ref={stepSlider}
          onValueChange={onStepValueChange}
          value={20}
          minimumValue={0}
          maximumValue={100}
          step={10}
          containerStyle={styles.container}
          trackStyle={styles.track}
          minimumTrackTintColor={Colors.blue30}
          maximumTrackTintColor={Colors.blue70}
          thumbTintColor={Colors.orange30}
          disableRTL={disableRTL}
          disableActiveStyling
        />
      </View>

      <View marginT-40>
        <Text margin-10 text70BL>Negative values -20 to -100 initial -30</Text>
        {renderValuesBox(negativeSliderValue)}
        <Incubator.Slider
          ref={negativeSlider}
          onValueChange={onNegativeValueChange}
          value={-30}
          minimumValue={-100}
          maximumValue={-20}
          // step={10}
          containerStyle={styles.container}
          disableRTL={disableRTL}
        />
      </View>

      <View marginT-40>
        <Text margin-10 text70BL>Range Slider values 0 to 100</Text>
        <View marginH-20>
          {renderValuesBox(sliderMinValue, sliderMaxValue)}
          <Incubator.Slider
            ref={rangeSlider}
            useRange
            useGap
            onRangeChange={onRangeChange}
            minimumValue={MIN}
            maximumValue={MAX}
            initialMinimumValue={10}
            initialMaximumValue={70}
            // step={1}
            disableRTL={disableRTL}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default IncubatorSliderScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  track: {
    borderRadius: 0
  }
});
