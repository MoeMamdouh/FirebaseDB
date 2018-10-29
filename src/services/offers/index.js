import { _get } from './../';
import { ENDPOINTS } from '../../constants';

export const requestOffers = async albumId => {
  const params = {
    'q[photos_album_id_eq]': albumId,
  };
  return _get(ENDPOINTS.OFFERS, params);
};
