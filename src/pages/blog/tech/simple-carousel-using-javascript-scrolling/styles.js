import styled from "styled-components";

const SimpleCarouselUsingJsScrollingWrapper = styled.div`
  .carousel-comp {
    display: flex;
    flex-direction: column;
    align-items: center;
    .carousel-container {
      display: flex;
      height: 200px;
      width: 400px;
      overflow: hidden;

      .carousel-item {
        margin: 0 5px;
        min-width: 360px;
        width: 360px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 50px;
      }
    }

    .carousel-actions {
      margin-top: 10px;
      width: 40px;
      display: flex;
      justify-content: space-between;
      color: #989a9e;
      i {
        cursor: pointer;
        outline: none;
      }
    }
  }
`;

export default SimpleCarouselUsingJsScrollingWrapper;
