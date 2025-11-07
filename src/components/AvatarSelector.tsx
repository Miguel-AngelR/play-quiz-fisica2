interface AvatarSelectorProps {
  selectedAvatar: string;
  onSelectAvatar: (avatar: string) => void;
}

const avatars = ["⚡", "🔋", "🧲", "⚛️", "🔬", "🌊", "⚙️", "💡"];

export const AvatarSelector = ({ selectedAvatar, onSelectAvatar }: AvatarSelectorProps) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-foreground">
        Elige tu avatar
      </label>
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
        {avatars.map((avatar) => (
          <button
            key={avatar}
            onClick={() => onSelectAvatar(avatar)}
            className={`
              aspect-square rounded-lg text-2xl sm:text-3xl flex items-center justify-center
              transition-all duration-200 active:scale-95 sm:hover:scale-110
              ${
                selectedAvatar === avatar
                  ? "bg-primary shadow-glow ring-2 ring-primary"
                  : "bg-muted hover:bg-muted/80"
              }
            `}
          >
            {avatar}
          </button>
        ))}
      </div>
    </div>
  );
};
