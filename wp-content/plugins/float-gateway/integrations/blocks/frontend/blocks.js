(() => {
    "use strict";
    const e = window.React,
        t = window.wc.wcBlocksRegistry,
        l = window.wc.wcSettings,
        a = window.wp.i18n,
        i = window.wp.htmlEntities,
        c = (0, l.getSetting)("float_data", {}),
        s = (0, a.__)(c.title, "float-payment-gateway"),
        r = ({ title: e }) => (0, i.decodeEntities)(e) || s,
        o = ({ description: t }) => {
            const l = (0, i.decodeEntities)(t || "");
            return c.is_uat ? e.createElement(e.Fragment, null, e.createElement("div", {
                style: {
                    backgroundColor: "#fff8e1",
                    borderLeft: "4px solid #ffc107",
                    color: "#856404",
                    padding: "10px",
                    marginBottom: "10px",
                    fontSize: "0.9em",
                    lineHeight: "1.4"
                }
            }, (0, a.__)("UAT MODE ENABLED: Transactions will not be processed live. Use test cards only.", "float-payment-gateway")), e.createElement("div", null, l)) : (0, i.decodeEntities)(t || "");
        },
        d = r({ title: c.title }),
        w = {
            name: "float",
            label: e.createElement("img", {
                src: c.logo_url,
                alt: s
            }),
            content: e.createElement(o, { description: c.description }),
            edit: e.createElement(o, { description: c.description }),
            canMakePayment: () => {
                return !!c.is_available;
            },
            ariaLabel: d,
            supports: { features: c.supports },
        };
    (0, t.registerPaymentMethod)(w);
})();
