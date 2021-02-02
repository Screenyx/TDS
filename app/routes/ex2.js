import Route from '@ember/routing/route';
import { datas } from 'tds/datas/data';
import Services from 'tds/classes/services';
 
export default class Ex2Route extends Route {
  model() {
    return new Services(datas);
  }
}