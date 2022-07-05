
import { Header } from "../header/base-request";
import { EmptyBody } from "./empty-body";

export class EmptyBodyRequest {
  header: Header = new Header();
  body: EmptyBody = new EmptyBody();
}