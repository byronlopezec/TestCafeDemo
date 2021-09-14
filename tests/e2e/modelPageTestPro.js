import Page from './page-model';

import { Selector } from 'testcafe';

fixture`My fixture`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Text typing basics', async t => {
    await t
        .typeText(Page.nameInput, 'Peter')
        .typeText(Page.nameInput, 'Paker', { replace: true })
        .typeText(Page.nameInput, 'r', { caretPos: 2 })
        .expect((Page.nameInput).value).eql('Parker');
});

test('Click check boxes and then verify their state', async t => {
    for (const feature of Page.featureList) {
        await t
            .click(feature.label)
            .expect(feature.checkbox.checked).ok();
    }
});

test('Submit a developer name and check the header', async t => {
    const header = Selector('#article-header');

    await Page.submitName('Peter');

    await t.expect(header.innerText).eql('Thank you, Peter!');
});