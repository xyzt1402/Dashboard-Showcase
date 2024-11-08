import React, { CSSProperties } from "react";
import customStyle from "./Select.module.scss";

interface CustomSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string | number }[];
  message?: string;
  style?: CSSProperties;
}

const Select = React.forwardRef<HTMLSelectElement, CustomSelectProps>(
  ({ label, options, message, style, ...props }, ref) => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>{label}</label>
        <div className={customStyle.selectContainer}>
          <select
            {...props}
            ref={ref}
            className={customStyle.selectContent}
            defaultValue={""}
            defaultChecked={true}
            style={style}
          >
            {options &&
              options.length > 0 &&
              options.map((option, index) => {
                return (
                  <option
                    key={`${option.value}-${index}`}
                    value={option.value}
                    className={customStyle.optionStyle}
                  >
                    {option.label}
                  </option>
                );
              })}
          </select>
          <div className={customStyle.iconContainer}>
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#ffffff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <span style={{ color: "red", fontSize: "0.81rem" }}>{message}</span>
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
