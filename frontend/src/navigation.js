import { spends } from './config';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';

export function navigateOnboarding(history) {
  const undecidedNonessentialSpends = reverse(sortBy(
    spends.filter(s => s.type === 'nonessential' && !s.decision),
    'value',
  ));
  if (undecidedNonessentialSpends.length === 0) {
    history.push('/goals');
  } else {
    const spend = undecidedNonessentialSpends[0];
    history.push(`/detail/${spend.id}`);
  }
}
