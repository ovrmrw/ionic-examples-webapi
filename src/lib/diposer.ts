import { Subscription } from "rxjs/Subscription";


export abstract class Disposer {
  subs: Subscription[] = []

  set disposable(sub: Subscription) {
    this.subs.push(sub)
  }

  disposeSubscriptions() {
    this.subs.forEach(sub => sub.unsubscribe())
  }

  abstract ionViewDidLoad(): void
  abstract ionViewWillUnload(): void
}
