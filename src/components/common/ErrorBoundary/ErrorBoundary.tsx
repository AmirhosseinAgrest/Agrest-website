import { Component, type ReactNode, type ErrorInfo } from 'react';
import { cn } from '@/lib/utils';
import { events } from '@/lib/analytics';
import { Heading, Text, Button, Icon } from '@/components/common';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    events.error(error.message);
    this.props.onError?.(error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  handleReload = (): void => {
    window.location.reload();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className={cn(
            'min-h-[50vh] flex items-center justify-center p-8',
            'bg-neutral-950'
          )}
        >
          <div className="max-w-md text-center">
            <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center mx-auto mb-6">
              <Icon name="error" size="xl" className="text-rose-400" />
            </div>

            <Heading as="h2" size="h3" className="mb-4">
              Something went wrong
            </Heading>

            <Text color="muted" className="mb-6">
              We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </Text>

            {import.meta.env.DEV && this.state.error && (
              <div className="mb-6 p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-left">
                <Text size="xs" className="font-mono text-rose-400 break-all">
                  {this.state.error.message}
                </Text>
              </div>
            )}

            <div className="flex justify-center gap-3">
              <Button variant="outline" onClick={this.handleReset}>
                Try Again
              </Button>
              <Button variant="primary" onClick={this.handleReload}>
                Reload Page
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;