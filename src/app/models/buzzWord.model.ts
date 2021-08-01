class BuzzWord {
    _id: string;
    name: string;
    description: string;
    mdbId: number;
    sourcePath: string;

    constructor(pName: string, pDescription: string, pMdb: number, pSourcePath: string)
    {
        // TODO include data type check
        this.name = pName;
        this.description = pDescription;
        this.mdbId = pMdb;
        this.sourcePath = pSourcePath;
    }
}

export default BuzzWord;
