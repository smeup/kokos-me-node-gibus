/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general";
import { Variables } from "../converter/variables";

export const REG0013222: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013222
    // REQUEST:
    // """
    // #1
    // COND:
    // §CORD_HID <> ''
    // THEN:
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // *SET §DUMMYN3 = #0
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_COMPASSO = §SI AND §LARG <= #500
    // THEN:
    // *SET §DUMMYN1 = [ §NR_RAGGI - #1 ]
    // *SET §DUMMYN2 = [ §LARG + #2 * §SPOR ]
    // #3
    // COND:
    // §FS_PROP = §SI AND §LARG <= #500
    // THEN:
    // *SET §DUMMYN1 = #5
    // *SET §DUMMYN2 = [ §LARG + #2 * §SPOR ]
    // #4
    // COND:
    // (§FS_RAGGIA_BASE = §SI OR §FS_SEMIT_BASE = §SI OR §FS_TONDO = §SI )
    // THEN:
    // *SET §DUMMYN1 = §NR_RAGGI
    // *SET §DUMMYN2 = [ §LARG + ( #2 * §SPOR ) ]
    // #5
    // COND:
    // §FS_BASE = §SI AND §LARG <= #500
    // THEN:
    // *SET §DUMMYN1 = §NR_RAGGI
    // *SET §DUMMYN2 = [ §LARG + ( #2 * §SPOR ) ]
    // #6
    // COND:
    // (§FS_SEMIT_COMPAS = §SI OR §FS_SEMIT_PROP = §SI OR §FS_RAGGIA_PROP = §SI )
    // THEN:
    // *SET §DUMMYN1 = #5
    // *SET §DUMMYN2 = [ §LARG + ( #2 * §SPOR ) ]
    // #7
    // COND:
    // §_AR = 'CP0007'
    // THEN:
    // *SET §DUMMYN1 = #2
    // *SET §DUMMYN2 = [ §LARG_INPUT + §ALTE_INPUT ]
    // #8
    // COND:
    // §DUMMYN1 > #0 AND §DUMMYN2 > #0
    // THEN:
    // *SET §DUMMYN3 = [ §DUMMYN1 * §DUMMYN2 ]
    // *SET *CM = §CORD_HID
    // #9
    // THEN:
    // *SET *CF = [ §DUMMYN3 / #100 ]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§CORD_HID') !== '') {
        vars.setDUMMYN1(0);
        vars.setDUMMYN2(0);
        vars.setDUMMYN3(0);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_COMPASSO') == vars.get('§SI') && vars.get('§LARG') <= 500) {
        vars.setDUMMYN1(vars.get('§NR_RAGGI') - 1);
        vars.setDUMMYN2(vars.get('§LARG') + 2 * vars.get('§SPOR'));
    }
    
    //#3
    if (vars.get('§FS_PROP') == vars.get('§SI') && vars.get('§LARG') <= 500) {
        vars.setDUMMYN1(5);
        vars.setDUMMYN2(vars.get('§LARG') + 2 * vars.get('§SPOR'));
    }
    
    //#4
    if (vars.get('§FS_RAGGIA_BASE') == vars.get('§SI') || vars.get('§FS_SEMIT_BASE') == vars.get('§SI') || vars.get('§FS_TONDO') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§NR_RAGGI'));
        vars.setDUMMYN2(vars.get('§LARG') + (2 * vars.get('§SPOR')));
    }
    
    //#5
    if (vars.get('§FS_BASE') == vars.get('§SI') && vars.get('§LARG') <= 500) {
        vars.setDUMMYN1(vars.get('§NR_RAGGI'));
        vars.setDUMMYN2(vars.get('§LARG') + (2 * vars.get('§SPOR')));
    }
    
    //#6
    if (vars.get('§FS_SEMIT_COMPAS') == vars.get('§SI') || vars.get('§FS_SEMIT_PROP') == vars.get('§SI') || vars.get('§FS_RAGGIA_PROP') == vars.get('§SI')) {
        vars.setDUMMYN1(5);
        vars.setDUMMYN2(vars.get('§LARG') + (2 * vars.get('§SPOR')));
    }
    
    //#7
    if (vars.get('_AR') === 'CP0007') {
        vars.setDUMMYN1(2);
        vars.setDUMMYN2(vars.get('§LARG_INPUT') + vars.get('§ALTE_INPUT'));
    }
    
    //#8
    if (vars.get('§DUMMYN1') > 0 && vars.get('§DUMMYN2') > 0) {
        vars.setDUMMYN3(vars.get('§DUMMYN1') * vars.get('§DUMMYN2'));
        vars.setCM(vars.get('§CORD_HID'));
    }
    
    //#9
    vars.setCF(vars.get('§DUMMYN3') / 100);
    // GENERATED

    return vars.output;
};
