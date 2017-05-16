import * as APIUtil from '../util/bench_api_util';
export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const reciveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches
});

export const fetchBenches = data => dispatch => (
  APIUtil.fetchBenches(data)
  .then(benches => dispatch(reciveBenches(benches)))
);
