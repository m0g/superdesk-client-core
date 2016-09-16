// vendor
import 'jquery-ui/jquery-ui';
import 'jquery-jcrop';
import 'jquery-gridster';
import 'moment-timezone';
import 'lodash';
import 'bootstrap';
import 'angular';
import 'angular-moment';
import 'angular-bootstrap-npm';
import 'angular-resource';
import 'angular-route';
import 'angular-gettext';
import 'angular-mocks';
import 'angular-animate';
import 'angular-embedly';
import 'angular-embed';
import 'angular-contenteditable';
import 'angular-vs-repeat';
import 'ng-file-upload';
import 'exif-js';
import 'raven-js';
import 'rangy';
import 'rangy-saverestore';
import 'ment.io';

// core
import 'superdesk/gettext';
import 'superdesk/activity';
import 'superdesk/analytics';
import 'superdesk/api';
import 'superdesk/auth';
import 'superdesk/beta';
import 'superdesk/datetime';
import 'superdesk/error';
import 'superdesk/elastic';
import 'superdesk/filters';
import 'superdesk/services';
import 'superdesk/directives';
import 'superdesk/editor2';
import 'superdesk/features';
import 'superdesk/list';
import 'superdesk/keyboard';
import 'superdesk/privileges';
import 'superdesk/notification';
import 'superdesk/itemList';
import 'superdesk/menu';
import 'superdesk/notify';
import 'superdesk/ui';
import 'superdesk/upload';
import 'superdesk/superdesk';
import 'superdesk/lang';

// modules
import 'superdesk-workspace';
import 'superdesk-dashboard';
import 'superdesk-users';
import 'superdesk-groups';
import 'superdesk-products';
import 'superdesk-publish';
import 'superdesk-templates';
import 'superdesk-profiling';
import 'superdesk-desks';
import 'superdesk-authoring';
import 'superdesk-search';
import 'superdesk-legal-archive';
import 'superdesk-web-publisher';
import 'superdesk-stream';
import 'superdesk-packaging';
import 'superdesk-highlights';
import 'superdesk-content-filters';
import 'superdesk-dictionaries';
import 'superdesk-vocabularies';
import 'superdesk-archive';
import 'superdesk/editor/spellcheck/spellcheck';
import 'superdesk-monitoring';
import 'superdesk-settings';
import 'superdesk-ingest';
import 'superdesk-search-providers';

import 'superdesk/editor/editor';
import 'superdesk/mocks';

var testsContext = require.context('.', true, /.spec.js$/);
testsContext.keys().forEach(testsContext);
