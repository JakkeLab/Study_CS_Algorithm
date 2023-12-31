<H3>231128_Stack</H3>
스택을 연결리스트를 이용해서 구현을 해보았음.
단, 언어에 따라 스택을 연결리스트가 아니라 배열을 이용하여 구현하는 경우도 있음.
백준 28278번을 풀 때는 Next 링크(포인터)를 이용하여 Node 내에 Node를 정의하다보니
연결리스트의 개념이 들어갔다고 볼 수 있음.

배열을 이용한 방법도 해볼 것.

<H3>231128_Queue</H3>
이중 연결리스트이 개념을 활용한 큐 구현.
기존의 연결리스트는 Next 포인터만 있었다면, 이중 연결리스트는 이전을 의미하는 Prev 포인터도
지정을 해줘서 각 노드가 앞 뒤를 가리키도록 하여 Dequeue를 할 때, O(1)의 성능을 내도록 하는 것이 핵심.

<H3>231129_Deque</H3>
이중 연결리스트이 개념을 활용한 데크 구현.
이중 연결리스트를 미리 구현해두었으므로, 데크자체는 맨뒤 삽입 및 삭제, 맨앞 삽입 및 삭제 정도의 기능만
추가하는 것으로 간단하게 구현이 가능하였음.

<H3>231130_HashTable</H3>
키, 값 쌍으로 자료를 저장하는 방법으로 이중 연결리스트를 통해서 구현을 했음.<br/>
해시테이블을 정의할 때, 해시 함수에 의해 같은 인덱스에 해당하는 값들은 최악의 경우 탐색 성능이 <br/>
O(n)의 성능을 갖도록 하게 구현됨.<br/>

해시테이블의 특징
- 장점 : 빠른 데이터 읽기, 삽입, 삭제가 가능
- 단점 : 메모리를 많이 차지함 (미리 배열을 선언해두므로), 좋은 해시함수 구현이 필수적임.
         해시 충돌이 일어날 수 있음.

여기서 좋은 해시함수는 충돌을 덜 일으키는 해시함수라고 볼 수 있음. 이를 simple uniform hashing을 만족한다고 함.<br/>
simple : 각각의 key가 중복없이 m개의 슬롯으로 동일한 확률로 분배된다.<br/>
uniform : : 각각의 key는 다른 key값이 해시값과 관계없이 해시되는것. 충돌을 최소화 하는것임.<br/>
따라서, m개의 슬롯이 있을 때, 중복이 최소화되어 m개의 slot에 골고루 분배되는것이 좋은 해시함수임.<br/>
==> 나의 생각 : 비둘기집 원리에 의해 슬롯보다 넣어야할 값들이 더 많으면 무조건 어딘가에서 2개이상 분배가 됨.<br/>
                이때 생각해 볼 수 있는 것은, 메모리 소모가 좀 더 크더라도 슬롯을 더 늘리고 그에 맞는 해시함수를 더 짜주는게 좋을지에 대한 고민,<br/>
                현재의 해시함수가 분배를 잘 해주고 있는지 (어딘가로 몰아서 삽입되는 방식은 아닌지)를 확인해야 할 것 같다.



<H3>231205_재귀</H3>
자기자신을 호출한다는 의미에서 재귀임.<br>
동작구조를 이해할 때, 메모리 구조중 스택 구조를 이해해야 함.<br>
함수를 실행할 때 스택 영역위로 함수 단위로 코드의 메모리가 쌓이는데 여기서 각 메모리의<br>
코드가 더이상 실행할 것이 없을때 메모리를 해제하고 스택 영역에서 메모리가 빠짐.<br><br>

두 함수 funcA(), funcB()를 각각 차례대로 실행하면 아래와 같이 스택에 쌓임.<br><br>

1. funcA push<br>
2. funcA pop<br>
3. funcB push<br>
4. funcB pop

funcA 안에 funcB를 넣어서 실행시키면 아래와 같음<br><br>

1. funcA push<br>
2. funcB push<br>
3. funcB pop<br>
4. funcA pop<br>

여기서 볼 것은 funcA 안에서 funcB를 호출한 경우, funcB가 끝날때 까지 기다려야 funcA의 메모리를
해제할 수 있다는 것임.


재귀함수 recA(number)는 아래와 같음.<br>

1. recA(number) push<br>
2. recA(number 다음의 값) push<br>
3. recA(number 다음 다음의 값) push<br>
....<br>

이렇게 쌓이고 하나씩 pop을 하게되는데 메모리를 너무 많이 차지하게 될 경우 운영체제가 더이상의 메모리를 낭비하지 않기 위해 맨 위에 쌓인 함수부터 메모리를 해제 함.<br>

이때, 맨위의 함수를 fn 이라 하면, fn-1은 fn이 종료되었으므로, fn-1도 더이상 실행할 코드가 없으니<br>
fn-1도 종료됨<br>

이렇게 fn, fn-1, fn-2, ... f2, f1 이 차례로 종료되면서 재귀함수가 끝나게 됨.<br>

한편 기저조건(재귀를 탈출하는 조건)을 설정하지 않을 경우, 무한히 실행되어 스택오버플로우가 발생함.<br>

메모리효율성 면에서 단순히 재귀를 쓰는건 for문보다 비효율적임 (메모리, 성능)<br>
컴퓨터에서 계산의 경우 상향식 계산과 하향식 계산이 있음.<br>
상향식 계산 : 맨 처음 문제부터 맨 마지막 문제까지 차례대로 푸는 것(ex. 5!를 구하기 위해 1부터 5까지 차례대로 곱하는 것);<br>
하향식 계산 : 이전 문제의 답을 이용하여 다음문제를 푸는 것. (ex. 5!를 구하기 위해 (5-1)!의 값을 이용하는 것)<br>

재귀함수는 하향식 계산에서 진가를 발휘함.<br/>

<H3>231212_알고리즘 - 선택정렬</H3>
핵심 : 가장 작은 값의 위치를 기억해두는것<br/>
내가 전에 잘못 짜던것 : 2중 for문을 짤 때, 두 for문 모두 배열 길이만큼 순회하도록 했는데<br/>
각 순회마다 정렬되어 제자리에 들어간 원소는 순회할 필요가 없으니 범위가 계속 하나씩 줄도록 해야함 (안쪽 for문에서)<br/>
내가 이부분을 캐치하지 못하고 코드를 짰었던것 같음 (= 순회 횟수가 n(n-1)/2 꼴이 나오도록 해야함)

<H3>231214_알고리즘 - 삽입정렬</H3>
핵심 : 정렬된 영역과 정렬되지 않은 영역을 나누고, 정렬된 영역의 맨 앞원소를 정렬된 부분의 맨 마지막부터 역순으로 정렬하는 것<br/>
정렬된 영역과 정렬되지 않은 영역을 각각 왼쪽과 오른쪽으로 나눈다. 그리고 삽입될원소를 비교하는 과정에서 자리를 뒤에서부터 찾는데<br/>
비교하는 원소가 앞으로 갈수록 기존의 원소를 한칸씩 뒤로 밀어주는 과정이 있다.

<H3>231214_알고리즘 - 병합정렬</H3>
핵심 : 반반 나눠서 정렬하는 분할정복으로 접근하기

<H3>231218_알고리즘 - 퀵정렬</H3>
핵심 : 피벗을 정의해놓고, 피벗의 바로 오른쪽에서는 오른쪽으로 1칸씩, 맨 오른쪽에서는 왼쪽으로 1칸씩 이동시킨다.<br/>
왼쪽에서는 피벗보다 큰 값을 만날 때 멈추고, 오른쪽에서는 피벗보다 작은 값을 만날 때 멈춘다.<br/>
여기서 왼쪽은 오른쪽 끝 자리를 넘지 않도록, 오른쪽은 왼쪽 끝 자리를 넘지 않도록 조건을 설정한다.<br/>
둘 다 멈추면 각각 멈춘 자리에서 서로의 값을 맞바꾼다. 그 다음, 오른쪽에서 멈춘 값과 피벗의 값을 서로 교환하여 자리를 바꾼다.<br/>
이 과정을 마친 뒤 오른쪽에서 시작하여 끝난 인덱스를 반환시킨다. 그 다음 다시 재귀호출을 하되, 피벗을 기준으로 right, left 을 인자로 넣는다.<br/>

퀵정렬도 재귀함수의 방법을 이용한다.

<H3>231219_DP - 메모이제이션</H3>
핵심 : 재귀를 쓰되, 배열과 같은 데이터를 저장할 공간을 같이 인수로 받아 해당 공간에 결과를 저장하면서 n번째 실행결과를 얻는다.<br/>
피보나치 수열 알고리즘을 재귀로만 짜면 중복되는 연산이 여러번 호출된다.<br/>
메모이제이션으로 이미 계산한 값이면 그 값을 그대로 가져오는 방식으로 한다.<br/>
이때 해시테이블을 이용해서 저장을 해두면 중복없이 값을 저장시키므로<br/>
해시테이블로 해당 값을 저장한다. 단, 중복계산만 안하는 것이고 여전히 재귀를 사용하므로<br/>
오버헤드가 커서 메모리 사용량이 커지는 문제는 여전하다.

<H3>231219_심화편 시작</H3>
P vs NP : 결정론적 튜링머신으로 해결할 수 있는 지 vs 비 결정론적 튜링머신으로 해결할 수 있는지<br/>

<H3>231220_이진 트리와 순회</H3>
트리구조는 트리 안에 트리(서브트리)가 있는 방식이라는 생각을 해야할듯. 순회시 재귀 사용하여 순회를 함.<br/>

<H3>231226_이진 탐색</H3>
핵심 : 재귀를 이용하여 Up and Down 게임을 하듯이 범위를 반으로 줄여나가면서 찾도록 하는 것<br/>
다만, 자료가 미리 정렬되어 있어야 하는것이 단점임.<br/>

<H3>231226_이진 탐색 트리</H3>
핵심 : 이진 탐색으로 좌측과 우측을 정해주어야 하는데, 여기서 이진 탐색의 아이디어가 활용이 됨<br/>

<H3>240108~09_AVLTree</H3>
핵심 : 좌우 균형을 맞춰서 균형인자의 차이가 -1, 0, 1 을 유지하도록 하는것.<br/>
중간에 함수에 오타가 나서 서브트리의 재 정의 과정에서 서브트리 재정렬이 잘 안되서 애먹음<br/>
잘 안될때는 노드가 적은 트리를 만들어서 결과를 직접 펜으로 그려보면서 확인하는게 좋을 것 같음.