from django.shortcuts import render


def wait(request):
    # 시간에 따라 각기 다른 애니메이션 실행
    # 키 입력 시 메인화면으로 이동, 키는 광원, 소리, 초음파, 물체 인식 등으로 차후 결정
    return render(request, 'toriends/wait.html')


def main(request):
    # 일정 시간이 지나면 알아서 대기화면으로 이동할 수 있게 만들기
    # 키 입력 시 키에 맞는 행동 실행, 키는 소리, 버튼, 제스처 등으로 차후 결정
    # 소리는 화장실 특성상 울리거나 다른 사용자의 영향으로 활용하지 않는 게 좋을 것 같음
    return render(request, 'toriends/main.html')


def brush(request):
    # 일정 시간이 지날 동안 사람을 인식하지 못할 때 메인화면으로 이동
    # 일정 시간이 지날 동안 좌표를 전송받지 못할 때 메인화면으로 이동
    return render(request, 'toriends/brush.html')


def wash(request):
    # 일정 시간이 지날 동안 사람을 인식하지 못할 때 메인화면으로 이동
    # 일정 시간이 지날 동안 좌표를 전송받지 못할 때 메인화면으로 이동
    return render(request, 'toriends/wash.html')


def goal(request):
    # 일정 시간이 지나면 메인 화면으로 이동
    return render(request, 'toriends/goal.html')
