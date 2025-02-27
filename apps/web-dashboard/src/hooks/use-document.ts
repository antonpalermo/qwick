import * as React from 'react';

export default function useDocument(title: string) {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
}
