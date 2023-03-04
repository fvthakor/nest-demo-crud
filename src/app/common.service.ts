export class CommonService {
  model: any;
  constructor(model) {
    this.model = model;
  }

  async create(createPostDto) {
    console.log(createPostDto);
    return await this.model.create(createPostDto);
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id) {
    return this.model.findById(id).exec();
    // return `This action returns a #${id} post`;
  }

  update(id, updatePostDto) {
    return this.model.updateOne({ _id: id }, updatePostDto);
    // return `This action updates a #${id} post`;
  }

  remove(id) {
    return this.model.deleteOne({ _id: id });
    return `This action removes a #${id} post`;
  }
}
