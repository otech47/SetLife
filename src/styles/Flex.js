import styled from 'styled-components'
import is from 'styled-is'

export default styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;

    /* wrap */
    ${is('wrap')`
        flex-wrap: wrap;
    `}

    ${is('wrap', 'reverse')`
        flex-wrap: wrap-reverse;
    `}

    /* direction */
    ${is('column')`
        flex-direction: column;
    `}

    ${is('row', 'reverse')`
        flex-direction: row-reverse;
    `}

    ${is('column', 'reverse')`
        flex-direction: column-reverse;
    `}

    /* justify-content */
    ${is('justifyStart')`
        justify-content: flex-start; /* default */
    `}

    ${is('justifyEnd')`
        justify-content: flex-end;
    `}

    ${is('justifyCenter')`
        justify-content: center;
    `}

    ${is('justifyBetween')`
        justify-content: space-between;
    `}

    ${is('justifyAround')`
        justify-content: space-around;
    `}

    /* align-content */
    ${is('contentStart')`
        align-content: flex-start;
    `}

    ${is('contentEnd')`
        align-content: flex-end;
    `}

    ${is('contentCenter')`
        align-content: center;
    `}

    ${is('contentSpaceBetween')`
        align-content: space-between;
    `}

    ${is('contentSpaceAround')`
        align-content: space-around;
    `}

    ${is('contentStretch')`
        align-content: stretch; /* default */
    `}

    /* align-items */
        ${is('alignStart')`
        align-items: flex-start;
    `}

    ${is('alignEnd')`
        align-items: flex-end;
    `}

    ${is('alignCenter')`
        align-items: center;
    `}

    ${is('alignBaseline')`
        align-items: baseline;
    `}

    ${is('alignStretch')`
        align-items: stretch;
    `}

    /* utilities */
    ${is('center')`
        align-items: center;
        justify-content: center;
    `}
`