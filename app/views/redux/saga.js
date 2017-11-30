import userSaga from '../Components/Tables/redux/saga';
export default function* appSaga() {
  yield []
    .concat(userSaga);
}
