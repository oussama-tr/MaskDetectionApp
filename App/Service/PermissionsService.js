import {
  check,
  request,
  RESULTS,
  requestMultiple,
} from 'react-native-permissions';

// This function can be used anywhere as it supports multiple permissions.
// It checks for permissions and then requests for it.
export async function checkMultiplePermissions(permissions) {
  let isPermissionGranted = false;
  const statuses = await requestMultiple(permissions);
  for (var index in permissions) {
    if (statuses[permissions[index]] === RESULTS.GRANTED) {
      isPermissionGranted = true;
    } else if([RESULTS.UNAVAILABLE, RESULTS.DENIED, RESULTS.BLOCKED].contains(statuses[permissions[index]])){
      isPermissionGranted = false;
      break;
    }
  }
  return isPermissionGranted;
}
