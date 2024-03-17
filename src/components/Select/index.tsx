import { AiOutlineUp } from 'react-icons/ai';
import { useSvgStyle, useLanguage } from '../../hooks';
import { variables } from '../../helpers';
import SvgUse from '../SvgUse';
import { Wrapper, Container, Label, Button, List, Item, Text } from './styles';

const Select = () => {
  const getSvgStyle = useSvgStyle();
  const { langs, isSelected, onClick, onSelect, onKeyDown } = useLanguage();
  const { colors } = variables;

  return (
    <Wrapper
      id='container'
      aria-labelledby='language'
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <Container>
        <Label id='language'>language</Label>
        <Button
          role='button'
          aria-label='select language'
          aria-controls='listbox'
          aria-expanded='false'
          data-action='select'
          tabIndex={-1}
        >
          <AiOutlineUp color={colors.accentBlue} />
        </Button>
      </Container>
      <List
        id='listbox'
        role='listbox'
        aria-label='languages'
        onClick={onSelect}
      >
        {langs && langs.map(({ symbol, lang }) => (
          <Item
            key={lang}
            role='option'
            aria-label={lang}
            aria-selected={isSelected === lang ? true : false}
            data-role='option'
            data-value={lang}
            tabIndex={-1}
          >
            <SvgUse
              style={getSvgStyle(20, 20, '')}
              icon={`icon-flag-${symbol}`}
              dataRole='option'
              dataValue={lang}
            />
            <Text data-role='option' data-value={lang}>
              {symbol}
            </Text>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default Select;
