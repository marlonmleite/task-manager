import styled, { css } from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import Home from 'core/assets/svg/home.svg'
import Task from 'core/assets/svg/task.svg'
import Tag from 'core/assets/svg/tag.svg'

const icon = css`
  width: 24px;
  height: 24px;
  padding-right: 24px;
`

export const NavMenu = styled.nav`
  width: 232px;
  min-width: 232px;
  height: 100%;
`

export const Nav = styled.ul`
  list-style: none;
  margin: 24px 8px 12px 8px;
  padding: 0;
`

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #616162;

  :hover {
    background-color: rgba(0,0,0,.03);
    border-radius: 2px;
    color: #212121;
  }

  ${({ active }) => active && css`
    background-color: rgba(0,0,0,.05);
    border-radius: 2px;
    color: #212121;
    font-weight: bold;

    &:hover {
      background-color: rgba(0,0,0,.05);
    }
  `}
}
`

export const Link = styled(LinkRouter)`
  display: flex;
  align-items: center;
  flex: 1;
  color: inherit;
  font-size: 14px;
  line-height: 40px;
  text-decoration: none;
  padding: 0 16px;
`

export const HomeIcon = styled(Home)`
  fill: #e2ac4a;
  ${icon};
`

export const TaskIcon = styled(Task)`
  fill: #4285f4;
  ${icon};
`

export const TagIcon = styled(Tag)`
  fill: #55bf20;
  ${icon};
`
