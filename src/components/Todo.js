import React from 'react'
import Button from '@atlaskit/button'
import styled , { css } from 'styled-components'
import CheckIcon from '@atlaskit/icon/glyph/check'

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;

    &:hover {
        .check-icon {
            display: inline-block;
        }
    }

    &,
    &hover {
        ${(p) =>
            p.isComplete && 
            css`
                text-decoration: line-through;
            `}
        }
    .check-icon {
        display: none;

        &:hover {
            background-color: #e2e2e2;
            border-radious: 3px
        }
    }
`
export default function Todo({ todo, onCheckBtnClick }) {
    return <ButtonStyled 
        shouldFitContainer
        isComplete={todo.isComplete}
        iconAfter={!todo.isComplete && (
            <span className='check-icon' onClick={() => onCheckBtnClick(todo.id)}>
                <CheckIcon primaryColor='#4fff4f'/>
            </span>
        )}
    >
        {todo.name}
    </ButtonStyled>
}