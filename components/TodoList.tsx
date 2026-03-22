"use client";

import { todos } from "@/lib/todos";

function PriorityDot({ priority }: { priority: string }) {
  const color =
    priority === "high"
      ? "bg-red-500"
      : priority === "medium"
        ? "bg-amber-500"
        : "bg-zinc-500";
  return <span className={`w-1.5 h-1.5 rounded-full ${color} inline-block`} />;
}

export default function TodoList() {
  const pending = todos.filter((t) => !t.done);
  const done = todos.filter((t) => t.done);

  return (
    <div className="glass-card p-5">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span>✅</span> 할 일
        <span className="text-sm text-zinc-500 font-normal">
          {pending.length}개 남음
        </span>
      </h2>

      <div className="space-y-2">
        {pending.map((todo) => (
          <div
            key={todo.id}
            className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-white/[0.02] transition-colors"
          >
            <div className="todo-checkbox mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <PriorityDot priority={todo.priority} />
                <span className="text-sm text-zinc-200">{todo.text}</span>
              </div>
              <span className="text-xs text-zinc-600 mt-0.5 inline-block">
                {todo.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {done.length > 0 && (
        <>
          <div className="border-t border-white/5 my-4" />
          <div className="text-xs text-zinc-600 mb-2">완료됨</div>
          <div className="space-y-1">
            {done.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-3 py-1.5 px-3 opacity-50"
              >
                <div className="todo-checkbox done">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M2 5L4 7L8 3"
                      stroke="#10b981"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-sm text-zinc-500 line-through">
                  {todo.text}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
