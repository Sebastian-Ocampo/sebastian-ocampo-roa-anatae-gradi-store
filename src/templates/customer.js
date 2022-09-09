import '../scss/customer.scss';
import '../components/form-addresses';
import { $Q } from '../utils/query-selector';

const toggleContainer = (elementShow, elementhidden) => {
  $Q(elementShow).dataset.active = true;
  $Q(elementhidden).dataset.active = false;
};

(function recoverToggle() {
  $Q('#display-recover').addEventListener('click',
    () => toggleContainer('#recover-container', '#login-container'),
  );

  $Q('#recover-hidden').addEventListener('click',
    () => toggleContainer('#login-container', '#recover-container'),
  );
}());
