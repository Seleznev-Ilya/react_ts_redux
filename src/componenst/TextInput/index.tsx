import React, { useCallback, memo } from "react";
import { useDispatch } from "react-redux";

interface Props {
  placeHolder: string;
  action: (...a: any) => { type: string; payload: string; id?: number };
  actionArguments?: {
    payload: string;
    id: number;
  };
  toggleTitleState?: () => void;
  deleteHendler?: () => any;
}

const Textinput = ({
  placeHolder,
  action,
  actionArguments,
  toggleTitleState,
  deleteHendler,
}: Props) => {
  const dispatch = useDispatch();
  let input: any;
  const initialvalu = actionArguments ? actionArguments.payload : "";

  const submitContent = useCallback((e) => {
    e.preventDefault();
    if (toggleTitleState) toggleTitleState();
    if (!input.value.trim()) {
      if (deleteHendler) deleteHendler();
      return;
    }
    actionArguments
      ? dispatch(action(input.value, actionArguments.id))
      : dispatch(action(input.value));

    input.value = "";
  }, []);

  return (
    <form onSubmit={submitContent}>
      <input
        placeholder={placeHolder}
        ref={(node) => {
          input = node;
          if (node) node.focus();
          if (node) node.value = initialvalu;
        }}
        onBlur={submitContent}
      ></input>
    </form>
  );
};

export default memo(Textinput);
