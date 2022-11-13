import React from "react";
import "./RenderDelivery.scss";

export default function RenderDelivery() {
  return (
    <div className="delivery__wrap">
      <strong className="delivery__title">When will my order arrive?</strong>
      <p>
        If the items are in stock, we’ll aim to dispatch them within 24 hours of
        your order being placed. Orders sent via Royal Mail 48® are usually
        received within two to five working days, including Saturdays. Orders
        sent via the Express Delivery service will be dispatched the same day if
        ordered by 2pm, Monday to Friday (excluding public holidays). We will
        aim to dispatch pre-orders so that you receive them on the release date.
        Where an item is 'Back in stock soon', we'll aim to receive more stock
        within a week and will dispatch any orders once the shipment has
        arrived. Certain items can take longer to source than the estimated
        week, particularly during busy trading periods and may take longer to
        arrive at our warehouse. In this instance, we'll send weekly updates to
        keep you aware. Royal Mail strike updates - As you have no doubt seen,
        Royal Mail will be striking on Saturday 12th November and Monday 14th
        November and as such, we are expecting there to be a few delays with
        delivery as a result of these. Don’t worry though, we’ll continue to
        dispatch your orders and will get them to you as soon as we can! Thanks
        for your patience and understanding in the meantime.
      </p>
      <strong>Delivery charges</strong>
      <p>
        Free delivery is available for most items when the order exceeds £20,
        but any exceptions will be clearly highlighted. Selected items are only
        available for delivery via the Royal Mail 48® service and other items
        are available for delivery using this service for a charge. Selected
        items are only available for delivery using Click & Collect to an hmv or
        FOPP store of your choice. All delivery options and any charges that are
        applicable will be shown at the checkout.
      </p>
      <strong>Will you tell me when my order is on its way?</strong>
      <p>
        We will email you as soon as each item is ready to be dispatched so you
        know when to expect them, but you can also check the status of your
        order in your account. We don’t always ship everything together so check
        your dispatch email for more details - we’ll send you a dispatch email
        per parcel. If your order contains items that are out of stock, we’ll
        ship the in-stock items as soon as we can and will dispatch the
        out-of-stock items as soon as we’ve received more stock in the
        warehouse. For items that are dispatched using our standard service, we
        ask that you wait 14 days from the date of dispatch before reporting any
        items as undelivered. Returns We’re happy to accept returns for unwanted
        items, provided that they are returned within 14 days of receipt;
        unopened, unused, and in perfect condition. Some exclusions apply,
        please visit our Help Centre for more details. Royal Mail strike updates
        - As you have no doubt seen, Royal Mail will be striking on Saturday
        12th November and Monday 14th November and as such, we are expecting
        there to be a few delays with delivery as a result of these. Don’t worry
        though, we’ll continue to process any returns as soon as they arrive
        back with us and we thank you for your patience and understanding in the
        meantime.
      </p>
    </div>
  );
}
