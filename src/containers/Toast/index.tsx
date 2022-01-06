import React from "react";
import { useTransition } from "react-spring";

import { ToastComponent } from "../../components";

import { ToastMessage } from "../../hooks/toast";
import { Container } from "./styles";

interface ToastProps {
  messages: ToastMessage[];
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    from: { right: "-120%", opacity: 0 },
    enter: { right: "0%", opacity: 1 },
    leave: { right: "-120%", opacity: 0 },
  });

  return (
    <>
      {messages.length > 0 && (
        <Container>
          {messagesWithTransitions((style, item, t, index) => (
            <ToastComponent key={index} style={style} message={item} />
          ))}
        </Container>
      )}
    </>
  );
};

export default Toast;
