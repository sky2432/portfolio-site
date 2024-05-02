import 'dayjs/locale/ja';
import dayjsLib from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

const _dayjs = dayjsLib;

_dayjs.locale('ja');
_dayjs.extend(utc);
_dayjs.extend(timezone);
_dayjs.extend(isBetween);
_dayjs.extend(isSameOrAfter);
_dayjs.extend(isSameOrBefore);
_dayjs.extend(relativeTime);

_dayjs.tz.setDefault('Asia/Tokyo');

export const dayjs = (date) => _dayjs(date).tz();
