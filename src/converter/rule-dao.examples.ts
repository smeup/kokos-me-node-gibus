import { Condition, IRuleDao } from './types';
import { Rule } from './types';

/**
 * Represents an implementation of the IRuleDao interface.
 * Provides examples of rule data access operations retrieved from CSV.
 */
class RuleDaoExamples implements IRuleDao {

    getUnconvertedRules(): Rule[] {
        throw new Error('Method not implemented.');
    }
    markRuleAsConverted(rule: Rule): void {
        throw new Error('Method not implemented.');
    }

}

export { RuleDaoExamples }
