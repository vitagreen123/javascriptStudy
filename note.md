# 함수형 프로그래밍
    객체가 기준이라는 말은 데이터 형이 기준이 된다는 의미이고,
    함수가 기준이라는 말은 로직이 기준이 된다는 의미이다.

# 절차지향 객체지향 함수형
## 절차지향
    절차지향 프로그래밍에서는 위에서 아래로 내려가면서 특정 변수의 값을 변경해 나가는 식으로 로직을 만든다.
## 객체지향
    객체지향 프로그래밍에서는 객체들을 만들어 놓고 객체들 간의 협업을 통해 로직을 만든다. 이벤트 등으로 서로를 연결한 후 상태의 변화를 감지하여 스스로 자신이 가진 값을 변경하거나, 상대의 메서드를 직접 실행하여 상태를 변경하는 식으로 프로그래밍을 한다.
## 함수형
    함수형 프로그래밍에서는 '항상 동일하게 동작하는 함수'를 만들고 보조 함수를 조합하는 식으로 로직을 완성한다. 내부에서 관리하고 있는 상태를 따로 두지 않고 넘겨진 인자에만 의존한다. 동일한 인자가 들어오면 항상 동일한 값을 리턴 하도록 한다. 보조 함수 역시 인자이며, 보조 함수에서도 상태를 변경하지 않으면 보조 함수를 받은 함수는 항상 동일한 결과를 만드는 함수가 된다.
## 리팩터링
    리팩터링의 핵심은 중복을 제거하고 의도를 드러내는 것이다.