import React, { useEffect } from "react";
import {
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
  FiAlertCircle,
} from "react-icons/fi";

import { ToastMessage, useToast } from "../../hooks/toast";

import { Container } from "./styles";
import { SpringValue } from "react-spring";

interface ToastProps {
  message: ToastMessage;
  style: {
    right: SpringValue<string>;
    opacity: SpringValue<number>;
  };
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertTriangle size={24} />,
  success: <FiCheckCircle size={24} />,
  alert: <FiAlertCircle size={24} />,
};

const ToastComponent: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type]}

      <div>
        {message.title && <strong>{message.title}</strong>}
        <p>{message.description}</p>
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default ToastComponent;
