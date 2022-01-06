import styled, { css } from "styled-components";
import { animated } from "react-spring";
import theme from "../../styles/theme";

interface ContainerProps {
  type: "success" | "error" | "info" | "alert";
  hasDescription: boolean;
}

const toastTypeVariations = {
  success: css`
    background-color: ${theme.colors.success};
  `,
  alert: css`
    background-color: ${theme.colors.warning};
  `,
  error: css`
    background-color: ${theme.colors.error};
  `,
  info: css`
    background-color: ${theme.colors.info};
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  & + div {
    margin-top: 8px;
  }
  color: ${({ theme }) => theme.colors.alternativeGray};
  ${({ type }) => toastTypeVariations[type]}
  > svg {
    margin-right: 12px;
  }
  div {
    flex: 1;
    p {
      margin-top: 4px;
      margin-bottom: 0;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
