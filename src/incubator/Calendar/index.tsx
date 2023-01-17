import React, {PropsWithChildren, useCallback, useMemo} from 'react';
import {useSharedValue} from 'react-native-reanimated';
import {FlashList} from '@shopify/flash-list';
import {addHeaders} from './helpers/DataProcessor';
import {CalendarContextProps, CalendarProps, FirstDayOfWeek, UpdateSource} from './types';
import CalendarContext from './CalendarContext';
import CalendarItem from './CalendarItem';
import Agenda from './Agenda';

// TODO: Move this logic elsewhere
// This is temporary just so we'll have enough items to play with
const ITEMS_RANGE = 5;
function generateMonthItems() {
  const today = new Date();
  const currentYear = today.getFullYear();

  const monthItems = [];

  for (let year = currentYear - ITEMS_RANGE; year <= currentYear + ITEMS_RANGE; year++) {
    for (let month = 0; month < 12; month++) {
      monthItems.push({year, month});
    }
  }

  return monthItems;
}
const MONTH_ITEMS = generateMonthItems();

function Calendar(props: PropsWithChildren<CalendarProps>) {
  const {data, children, initialDate = Date.now(), firstDayOfWeek = FirstDayOfWeek.MONDAY} = props;
  const current = useSharedValue<number>(initialDate);
  const lastUpdateSource = useSharedValue<UpdateSource | undefined>(undefined);
  const processedData = useMemo(() => addHeaders(data), [data]);

  const setDate = useCallback<CalendarContextProps['setDate']>((date: number, updateSource: UpdateSource) => {
    current.value = date;
    lastUpdateSource.value = updateSource;
  }, []);

  const contextValue = useMemo<CalendarContextProps>(() => {
    return {
      data: processedData,
      firstDayOfWeek,
      selectedDate: current,
      setDate,
      showWeeksNumbers: true
    };
  }, []);

  const renderCalendarItem = useCallback(({item}) => {
    return <CalendarItem year={item.year} month={item.month}/>;
  }, []);

  return (
    <CalendarContext.Provider value={contextValue}>
      {/* <View> */}
      <FlashList
        estimatedItemSize={353}
        data={MONTH_ITEMS}
        // initialScrollIndex={Math.floor(MONTH_ITEMS.length / 2)}
        renderItem={renderCalendarItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      {/* </View> */}
      {children}
    </CalendarContext.Provider>
  );
}

Calendar.Agenda = Agenda;

export default Calendar;
