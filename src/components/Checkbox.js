import React from "react";

export default function Checkbox({ className, text, ...rest }) {
  return (
    <div>
      <label className={className}>
        <input type="checkbox" {...rest} /> <span>{text}</span>
      </label>
    </div>
  );
}
