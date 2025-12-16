import { cn } from '@/lib/utils';
import { Text, Image, Icon } from '@/components/common';
import { socialLinks } from '@/data';

interface BlogAuthorProps {
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function BlogAuthor({ author, className }: BlogAuthorProps) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl',
        'bg-neutral-900/30 border border-neutral-800/50',
        className
      )}
    >
      {author.avatar ? (
        <Image
          src={author.avatar}
          alt={author.name}
          className="w-20 h-20 rounded-full object-cover shrink-0"
        />
      ) : (
        <div className="w-20 h-20 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
          <Text size="xl" weight="bold" className="text-neutral-400">
            {getInitials(author.name)}
          </Text>
        </div>
      )}

      <div className="flex-1 text-center sm:text-left">
        <Text size="lg" weight="semibold" className="text-white mb-1">
          {author.name}
        </Text>
        {author.role && (
          <Text size="sm" color="muted" className="mb-4">
            {author.role}
          </Text>
        )}

        <div className="flex items-center justify-center sm:justify-start gap-2">
          {socialLinks.slice(0, 4).map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'w-9 h-9 rounded-lg flex items-center justify-center',
                'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white',
                'transition-colors duration-200'
              )}
            >
              <Icon name={social.icon} size="sm" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogAuthor;