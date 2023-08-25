import { styled } from 'styled-components';

export const HeroSection = styled.section`
  position: relative;

  .image-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .search-input-wrapper {
    display: flex;
    flex-direction: column;
    padding: 1.8rem;
    background: #fff;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 15px;
    box-shadow: -3px 3px 10px #ccc;
    width: 40%;
    max-width: 550px;

    h3 {
      font-size: 1.5rem;
      line-height: 180%;
    }

    & > p {
      color: #777;
      margin-bottom: 1rem;

      span {
        font-family: 'Noto Sans KR', sans-serif;
      }
    }

    form > div {
      display: flex;
      border: 1px solid #ccc;
      margin-bottom: 0.5rem;
      position: relative;
      border-radius: 0.25rem;

      p {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 0.5rem 1rem;

        input {
          padding: 0.25rem 0;
        }
      }

      .line {
        width: 1px;
        height: 50%;
        background: #ccc;
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
