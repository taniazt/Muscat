import './SecondaryButton.scss';

export const SecondaryButton = ({ text }: { text: string }) => {
  return <button className="secondary-button">{text}</button>;
};
