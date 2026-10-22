import 'dayjs/locale/ja';

import dayjsLib, { type ConfigType } from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjsLib.locale('ja');
dayjsLib.extend(utc);
dayjsLib.extend(timezone);

dayjsLib.tz.setDefault('Asia/Tokyo');

export const dayjs = (date?: ConfigType) => dayjsLib(date).tz();
