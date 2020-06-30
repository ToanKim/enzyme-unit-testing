import { shallow, mount, render } from 'enzyme';
import React from 'react';
import { expect } from 'chai';

import Bar from '../Bar';
import Foo from '../Foo';
import MultipleFoos from '../MultipleFoos';

describe("<Bar />", () => {
    it("shallow renders <Foo /> component", () => {
        const wrapper = shallow(<Bar />);
        console.log(wrapper.debug());
        console.log(wrapper.find(Foo).dive().debug());
        expect(wrapper.find(".in-foo")).to.have.lengthOf(0);
        expect(wrapper.find(Foo).dive().find('.in-foo')).to.have.lengthOf(1);

        // render() does not work
        // expect(wrapper.find(Foo).render().find('.in-foo')).to.have.lengthOf(1);
    });

    it("fully renders <Foo /> component", () => {
        const wrapper = mount(<Bar />);
        expect(wrapper.find('.in-foo')).to.have.lengthOf(1);
    })

    it("renders <Foo /> component", () => {
        const wrapper = render(<Bar />);
        expect(wrapper.find(".in-foo")).to.have.lengthOf(1);
    })

    it("only renders children", () => {
        const wrapper = render(<Bar />);
        expect(wrapper.find(".in-bar")).to.have.lengthOf(0);
    })
})

describe("<MultipleFoos />", () => {
    it("shallow renders ", () => {
        const wrapper = shallow(<MultipleFoos />);
        expect(wrapper.find(".in-foo")).to.have.lengthOf(0);
        expect(wrapper.find(Bar).dive().find(".in-foo")).to.have.lengthOf(0);
        expect(wrapper.find(Bar).dive().find(Foo).dive().find(".in-foo")).to.have.lengthOf(1);
    })

    it("fully renders ", () => {
        const wrapper = mount(<MultipleFoos />);
        expect(wrapper.find(".in-foo")).to.have.lengthOf(4);
    })

    it("renders ", () => {
        const wrapper = render(<MultipleFoos />);
        expect(wrapper.find(".in-foo")).to.have.lengthOf(4);
    })
})