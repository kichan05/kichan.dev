import styled from "styled-components";
import {UI_ACTION_TYPE, useUiDispatch, useUiState} from "../context/UiReducer";
import Button from "../component/Button";
import {PageBasicStyle} from "../style/BasicStyle";
import {useState} from "react";
import {LuImagePlus} from "react-icons/lu";
import {IconButton} from "../component/IconButton";

const PageStyle = styled.div`
  ${PageBasicStyle};
`

const Page = () => {
  return (
    <PageStyle>

    </PageStyle>
  )
}

export default Page