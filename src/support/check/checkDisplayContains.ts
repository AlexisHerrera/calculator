import checkContainsText from './checkContainsText';

export default (
    falseCase: ' not',
    expectedText: string
) => {
    checkContainsText('element', "#display", falseCase, expectedText)
}
