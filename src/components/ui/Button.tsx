import React from "react";

interface BluePrimaryBtnProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const BluePrimaryBtn: React.FC<BluePrimaryBtnProps> = ({
  text,
  onClick,
  disabled,
}) => {
  return (
    <button
      className="btn w-100 btn-primary-blue"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export const BluePrimaryBtnMemo = React.memo(BluePrimaryBtn);
