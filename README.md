# Kokoa Clone 2020 Update
README.md /모든 깃 레퍼지토리가 가지고 있어야 하는 파일

계속 main-screen 쓰는 이유: 패딩값을 맞추어놓음 

아이콘과 텍스트 두개밖에 없는데도 displayflex alignitems center 쓰는이유? 가로축기준 중앙 정렬 

어떤요소를 fixed 하거나 aboslute하는 것은 box, block의 개념이 아니라  다른 layer개념이 된다.


오직 flex-container에 있는 flex-children만 사용 할 수 있는 기능 order : 순서가 바뀜
.message-row--own .message__bubble{
    order: 1;    
}
.message-row--own .message__time{
    order: 0;
}//코드가 너무 김 
.message-row--own .message__info{
    flex-direction: row-reverse;
}// 같은 결과
