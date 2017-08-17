import Ember from 'ember';
import moment from 'moment';
import DatePicker from './date-picker';
import layout from '../templates/components/date-picker-inline';

const {
  get,
  set
} = Ember;

export default DatePicker.extend({
  layout,

  disabled: false,

  actions: {
    gotoPreviousMonth() {
      let month = get(this, 'currentMonth');

      set(this, 'currentMonth', month.clone().subtract(1, 'month'));

      if (moment().isSame(get(this, 'currentMonth'), 'month')) {
        set(this, 'disabled', true);
      }
    },

    gotoNextMonth() {
      set(this, 'disabled', false);
      let month = get(this, 'currentMonth');
      set(this, 'currentMonth', month.clone().add(1, 'month'));
    }
  }
});
