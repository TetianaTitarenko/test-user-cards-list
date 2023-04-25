import { StyledDiv, Title, Text, Img } from './home.styled';

export default function Home() {
  return (
    <StyledDiv>
      <Title>
        Welcome page{' '}
        <span role="img" aria-label="Users">
          <Img
            src="https://d31xsmoz1lk3y3.cloudfront.net/games/images/1455909965_Find_the_Simpsons_Characters"
            alt="Simpson cast"
          />
        </span>
      </Title>
      <Text>
        "The Simpsons" is an American animated television series that began
        airing in 1989. Created by Matt Groening, it follows the adventures of
        the Simpsons, a middle-class family living in the fictional town of
        Springfield. The series is one of the longest-running in television
        history, with over 700 episodes produced to date. "The Simpsons" has
        become popular worldwide and has received numerous awards, including 34
        Emmy Awards. The show is known for its humor, satire, and social
        commentary, as well as its many iconic characters such as Homer Simpson,
        Marge, Bart, Lisa, and Maggie. If you want to become their followers,
        welcome to the website.
      </Text>
    </StyledDiv>
  );
}
