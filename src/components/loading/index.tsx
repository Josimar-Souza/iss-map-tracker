import {
  LoadingContainer,
  LoadingIcon,
  LoadingTittle,
} from "./loadingStyles";

type LoadingProps = {
  children?: React.ReactNode,
  color?: string,
}

function Loading({ children, color }: LoadingProps) {
  return (
    <LoadingContainer>
      <LoadingIcon color={color} />
      <LoadingTittle color={color}>
        { children }
      </LoadingTittle>
    </LoadingContainer>
  )
};

export default Loading;
