import Ember from 'ember';
import moment from 'moment';
import DatePicker from './date-picker';
import layout from '../templates/components/date-picker-inline';

const {
  get,
  set,
  computed: { oneWay }
} = Ember;

export default DatePicker.extend({
  layout,

  /**
   * [disablesPreviosButton description]
   * @type {Boolean}
   * @public
   */
  disablesPreviosButton: oneWay('disablesPreviosButtonFlag'),

  actions: {

    /**
     * [gotoPreviousMonth description]
     * @return {[type]} [description]
     * @public
     */
    gotoPreviousMonth() {
      let month = get(this, 'currentMonth');

      set(this, 'currentMonth', month.clone().subtract(1, 'month'));

      if (moment().isSame(get(this, 'currentMonth'), 'month') && get(this, 'disablesPreviosButtonFlag')) {
        set(this, 'disablesPreviosButton', true);
      }
    },

    /**
     * [gotoNextMonth description]
     * @return {[type]} [description]
     * @private
     */
    gotoNextMonth() {
      set(this, 'disablesPreviosButton', false);
      let month = get(this, 'currentMonth');
      set(this, 'currentMonth', month.clone().add(1, 'month'));
    }
  }
});
