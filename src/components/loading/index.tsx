import {
  LoadingContainer,
  LoadingIcon,
  LoadingTittle,
} from "./loadingStyles";

type LoadingProps = {
  children?: React.ReactNode,
}

function Loading({ children }: LoadingProps) {
  return (
    <LoadingContainer>
      <LoadingIcon />
      <LoadingTittle>
        { children }
      </LoadingTittle>
    </LoadingContainer>
  )
};

export default Loading;
