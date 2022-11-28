import React from "react";
import "./RenderDetails.scss";

export default function RenderDetails() {
  return (
    <div className="table-container">
      <table className="detail__table">
        <tbody>
          <tr>
            <td>No. of discs</td>
            <td>1 disc(s)</td>
          </tr>
          <tr>
            <td>Formsat</td>
            <td>Vinyl</td>
          </tr>
          <tr>
            <td>Label</td>
            <td>Interscope</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
