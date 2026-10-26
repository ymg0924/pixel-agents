import { Button } from './ui/Button.js';

interface MigrationNoticeProps {
  onDismiss: () => void;
}

export function MigrationNotice({ onDismiss }: MigrationNoticeProps) {
  return (
    <div
      className="absolute inset-0 bg-black/70 flex items-center justify-center z-100"
      onClick={onDismiss}
    >
      <div
        className="pixel-panel py-24 px-32 max-w-xl text-center leading-[1.3]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-5xl mb-12 text-accent">We owe you an apology!</div>
        <p className="text-xl m-0 mb-12">
          모든 그림 자료를 직접 새로 만든 오픈소스 에셋으로 바꿨습니다. 그래서 아쉽게도 이전 배치는
          초기화되었습니다.
        </p>
        <p className="text-xl m-0 mb-12">We're really sorry about that.</p>
        <p className="text-xl m-0 mb-12">
          다행히 이번 한 번뿐이고, 앞으로 더 멋진 업데이트를 위한 준비입니다.
        </p>
        <p className="text-xl m-0 mb-20">Stay tuned, and thanks for using Pixel Agents!</p>
        <Button variant="accent" size="xl" onClick={onDismiss}>
          확인
        </Button>
      </div>
    </div>
  );
}
